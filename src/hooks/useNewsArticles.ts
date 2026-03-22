import { useQuery } from '@tanstack/react-query';
import { fetchNewsArticles } from '../services/newsApi';

export function useNewsArticles() {
    return useQuery({
        queryKey: ["news"],
        queryFn: fetchNewsArticles,
    })
}