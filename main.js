'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const textlint_1 = require("textlint");
const lintFile = (filePath) => {
    const options = {
        formatterName: "pretty-error",
    };
    const engine = new textlint_1.TextLintEngine(options);
    const filePathList = [path_1.default.resolve(process.cwd(), filePath)];
    return engine.executeOnFiles(filePathList).then((results) => {
        if (engine.isErrorResults(results)) {
            const output = engine.formatResults(results);
            console.log(output);
        }
        else {
            console.log("All Passed!");
        }
    });
};
lintFile(path_1.default.resolve(__dirname, "doc.md")).catch(function (error) {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgVGV4dExpbnRFbmdpbmUgfSBmcm9tIFwidGV4dGxpbnRcIjtcblxuY29uc3QgbGludEZpbGU6IChmaWxlUGF0aDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+ID0gKGZpbGVQYXRoOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBmb3JtYXR0ZXJOYW1lOiBcInByZXR0eS1lcnJvclwiLFxuICB9O1xuICBjb25zdCBlbmdpbmUgPSBuZXcgVGV4dExpbnRFbmdpbmUob3B0aW9ucyk7XG4gIGNvbnN0IGZpbGVQYXRoTGlzdCA9IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgZmlsZVBhdGgpXTtcblxuICByZXR1cm4gZW5naW5lLmV4ZWN1dGVPbkZpbGVzKGZpbGVQYXRoTGlzdCkudGhlbigocmVzdWx0cykgPT4ge1xuICAgIGlmIChlbmdpbmUuaXNFcnJvclJlc3VsdHMocmVzdWx0cykpIHtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGVuZ2luZS5mb3JtYXRSZXN1bHRzKHJlc3VsdHMpO1xuICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJBbGwgUGFzc2VkIVwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxubGludEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJkb2MubWRcIikpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQXdCLE1BQUEsR0FBQSxPQUFBLENBQUEsZUFBQSxDQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ3hCLE1BQTBDLFVBQUEsR0FBQSxPQUFBLENBQUEsVUFBQSxDQUFBLENBQUE7QUFFMUMsTUFBTSxRQUFRLEdBQXdDLENBQUMsUUFBZ0IsS0FBSTtBQUN6RSxJQUFBLE1BQU0sT0FBTyxHQUFHO0FBQ2QsUUFBQSxhQUFhLEVBQUUsY0FBYztLQUM5QixDQUFDO0FBQ0YsSUFBQSxNQUFNLE1BQU0sR0FBRyxJQUFJLHlCQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0MsSUFBQSxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQUEsQ0FBQSxPQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBRTdELElBQUEsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSTtBQUMxRCxRQUFBLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLFlBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyQixTQUFBO0FBQU0sYUFBQTtBQUNMLFlBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM1QixTQUFBO0FBQ0gsS0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixRQUFRLENBQUMsTUFBQSxDQUFBLE9BQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxFQUFBO0FBQy9ELElBQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixJQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDOzsifQ==
