import path from "path";
import { TextLintEngine } from "textlint";

const lintFile: (filePath: string) => Promise<void> = (filePath: string) => {
  const options = {
    formatterName: "pretty-error",
  };
  const engine = new TextLintEngine(options);
  const filePathList = [path.resolve(process.cwd(), filePath)];

  // @ts-ignore
  return engine.executeOnFiles(filePathList).then((results) => {
    if (engine.isErrorResults(results)) {
      const output = engine.formatResults(results);
      console.log(output);
    } else {
      console.log("All Passed!");
    }
  });
};

lintFile(path.resolve(__dirname, "doc.md")).catch(function (error) {
  console.error(error);
  process.exit(1);
});
