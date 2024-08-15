import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const currentDirectory = path.resolve(); // ela tá obtendo o nosso diretório atual
const cyberDocsPath = path.join(currentDirectory, "/doc/cyber.yaml");
const cyberDocs = YAML.load(cyberDocsPath);

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "cyber Segurança",
			version: "1.0.0",
			description: "Gerenciar dados de cyber Segurança",
		},
		components: cyberDocs.components,
		paths: cyberDocs.paths,
	},
	apis: [],
};

const swaggerDoc = swaggerJSDoc(options);

const setupSwagger = (app) => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};

export { setupSwagger };

//Para importar um arquivo YAML, vamos precisar fazer
// algumas alterações na configuração do nosso swagger
