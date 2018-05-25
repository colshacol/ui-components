import { CheckerPlugin, TsConfigPathsPlugin } from "awesome-typescript-loader";

const configFileName = "tsconfig.storybook.json";

export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: "awesome-typescript-loader",
      options: {
        configFileName: configFileName
      }
    }
  ]
};

export const resolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx"],
  plugins: [new TsConfigPathsPlugin({ configFileName: configFileName })]
};

export const plugins = [new CheckerPlugin()];
