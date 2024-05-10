import { useHttp } from "../hooks/http.hook"

const usePostService = () => {
    const {loading, error, request} = useHttp();

    const getAllPosts = async () => {
        const res = await request('https://cloud.codesupply.co/endpoint/react/data.json');
        return res;
    }

    return {loading, error, getAllPosts};
}

export default usePostService;