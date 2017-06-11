
export default function homePageUtils() {

    function idGenerator() {
        let lastId = 0;
        function next() {
            return lastId += 1;
        }
        return {
            next
        };
    };

    return {
        idGenerator: idGenerator
    }

}


