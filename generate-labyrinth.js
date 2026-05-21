const fs = require('fs');
const path = require('path');

// GitHub'ın parser'larını yoracak klasör sayısı
const NUM_FOLDERS = 400; 
const baseDir = path.join(__dirname, 'monorepo-hell');

if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
}

console.log("Labirent oluşturuluyor, lütfen bekleyin...");

for (let i = 0; i < NUM_FOLDERS; i++) {
    const folderPath = path.join(baseDir, `service-block-${i}`);
    fs.mkdirSync(folderPath);

    // 1. Node.js (NPM) Dosyası
    const packageJson = {
        name: `service-block-${i}`,
        dependencies: {
            "lodash": "*",
            "express": "*",
            "react": "*"
        }
    };
    fs.writeFileSync(path.join(folderPath, 'package.json'), JSON.stringify(packageJson, null, 2));

    // 2. Python (Pip) Dosyası
    const requirementsTxt = `requests==2.28.1\nnumpy==1.23.4\npandas==1.5.0\nflask==2.2.2\n`;
    fs.writeFileSync(path.join(folderPath, 'requirements.txt'), requirementsTxt);

    // 3. Java (Maven) Dosyası - XML okumak parser'ları her zaman yorar
    const pomXml = `
<project xmlns="http://maven.apache.org/POM/4.0.0">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.mock.repo</groupId>
  <artifactId>service-block-${i}</artifactId>
  <version>1.0</version>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
      <version>2.7.4</version>
    </dependency>
  </dependencies>
</project>
    `.trim();
    fs.writeFileSync(path.join(folderPath, 'pom.xml'), pomXml);

    // 4. Ruby (Bundler) Dosyası
    const gemfile = `source 'https://rubygems.org'\ngem 'rails', '7.0.4'\ngem 'pg'\n`;
    fs.writeFileSync(path.join(folderPath, 'Gemfile'), gemfile);
}

console.log(`✅ Toplam ${NUM_FOLDERS} klasör ve ${NUM_FOLDERS * 4} adet farklı ekosistem manifest dosyası üretildi!`);
console.log("Klasör adı: 'monorepo-hell'");