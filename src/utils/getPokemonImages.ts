// @ts-nocheck
// Import all images code

const fetchImages = (context: string) => {
    const images = {};
    const cache = {};
    function importAll(r) {
        r.keys().forEach((key) => (cache[key] = r(key)));
    }
    importAll(context);
    Object.entries(cache).forEach((module: string[]) => {
        let key = module[0].split("");
        key.splice(0, 2);
        key.splice(-4, 4);
        images[[key.join("")]] = module[1];
    });
        return images;
    };
    
    export const images = fetchImages(
        // boolean to indicate whether to include subdirs
        // regex used to say what format to grab 
        require.context("../assets/pokemons/shiny", false, /\.(png|jpe?g|svg)$/)
    );
    export const defaultImages = fetchImages(
        require.context("../assets/pokemons/default", false, /\.(png|jpe?g|svg)$/)
    );