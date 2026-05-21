const fs = require('fs');

// Bunların hepsi NPM'de gerçekten var olan ve devasa bağımlılık ağaçlarına sahip paketlerdir.
// Özellikle CLI (Command Line Interface) araçları inanılmaz fazla alt paket çeker.
const realHeavyPackages = [
  "aws-sdk",
  "firebase-admin",
  "firebase",
  "gatsby",
  "gatsby-cli",
  "next",
  "nuxt",
  "@angular/cli",
  "@angular/core",
  "@nestjs/cli",
  "@nestjs/core",
  "puppeteer",
  "playwright",
  "cypress",
  "webpack",
  "webpack-cli",
  "react-scripts",
  "eslint",
  "typescript",
  "jest",
  "typeorm",
  "sequelize",
  "mongoose",
  "rxjs",
  "three",
  "d3",
  "serverless",
  "expo-cli",
  "babel-cli",
  "@babel/core",
  "@babel/preset-env",
  "eslint-plugin-react",
  "eslint-plugin-import",
  "prettier",
  "nodemon",
  "pm2",
  "mocha",
  "chai",
  "webpack-dev-server",
  "rollup",
  "vite",
  "parcel",
  "graphql",
  "apollo-server",
  "express",
  "socket.io",
  "lodash",
  "moment",
  "chalk",
  "inquirer"
];

const dependencies = {};

// Sadece gerçek paketleri ekliyoruz
realHeavyPackages.forEach(pkg => {
  dependencies[pkg] = "latest"; 
});

const packageJson = {
  name: "sbom-timeout-tester-real",
  version: "1.0.0",
  description: "A mock repository designed to overload GitHub SBOM generation with real packages.",
  dependencies: dependencies
};

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log("✅ Gerçek paketlerden oluşan package.json başarıyla oluşturuldu!");