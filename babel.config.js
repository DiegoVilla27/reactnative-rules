module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src",
          "@helpers": "./src/helpers"
        },
        extensions: [".js", ".jsx", ".json", ".tsx", ".ts"]
      }
    ]
  ]
};
