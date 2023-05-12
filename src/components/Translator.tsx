import { useState } from "react";
import { TbArrowsExchange } from "react-icons/tb";
import { languages } from "../constants";
import Textarea from "./Textarea";
import Select, { Option } from "./Select";
import axios from "axios";
import { useQuery } from "react-query";
import Spinner from "./Spinner";

const translate = async (
  source_language: string,
  target_language: string,
  text: string
) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("source_language", source_language);
  encodedParams.set("target_language", target_language);
  encodedParams.set("text", text);

  const options = {
    method: "POST",
    url: "https://text-translator2.p.rapidapi.com/translate",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "72c5318598mshfc044f88241f357p12505fjsn757a6b51cf37",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data.data.translatedText;
  } catch (error) {
    console.error(error);
  }
};

const Translator = () => {
  const [text, setText] = useState("");

  const [language, setLanguage] = useState({
    from: "en",
    to: "hi",
  });
  const { data, isLoading, isError, refetch, isRefetching, isRefetchError } =
    useQuery({
      queryKey: ["translate", text, language],
      queryFn: () => translate(language.from, language.to, text),
      enabled: false,
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await refetch();
  };

  return (
    <div className="px-4 sm:px-6 py-6 max-w-6xl w-full mx-auto ">
      <h1 className="text-4xl md:text-5xl mb-6">Translate</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="space-y-4">
            <Select
              value={language.from}
              onChange={(e) =>
                setLanguage({ ...language, from: e.target.value })
              }
            >
              {languages.map(({ code, name }) => (
                <Option key={code} value={code}>
                  {name}
                </Option>
              ))}
            </Select>
            <Textarea
              placeholder="Enter text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              cols={30}
              rows={5}
            />
          </div>
          <div className="flex gap-2 items-center md:flex-col justify-center">
            <TbArrowsExchange size={30} />
            {/* {(isLoading || isRefetching) && <Spinner />} */}
            {(isError || isRefetchError) && (
              <div>Sorry Something went wrong:(</div>
            )}
          </div>
          <div className="space-y-4">
            <Select
              value={language.to}
              onChange={(e) => setLanguage({ ...language, to: e.target.value })}
            >
              {languages.map(({ code, name }) => (
                <Option key={code} value={code}>
                  {name}
                </Option>
              ))}
            </Select>
            <Textarea
              placeholder="Translation"
              value={data}
              readOnly
              cols={30}
              rows={5}
            />
          </div>
        </div>
        <button
          className="py-2.5 px-5 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-600 transition-colors duration-200 flex items-center gap-2"
          type="submit"
        >
          {isRefetching ? "Translating" : "Translate"}
          {(isLoading || isRefetching) && <Spinner />}
        </button>
      </form>
    </div>
  );
};

export default Translator;
