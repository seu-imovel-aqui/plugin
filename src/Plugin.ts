import { Ad } from "@seu-imovel-aqui/plugin-types";

export interface Plugin {

   /**
    * This methods is responsible for executing the scraping on the site and returning all the data found
    */
   executeScraping(): Promise<Ad[]>
}