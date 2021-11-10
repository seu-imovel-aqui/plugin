import { Property } from "./Property";
export interface Plugin {
    /**
     * This methods is responsible for executing the scraping on the site and returning all the data found
     */
    executeScraping(): Promise<Property[]>;
}
