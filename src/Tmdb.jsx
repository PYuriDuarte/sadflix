const API_KEY='141731ad062f87d6cc01a225e27a5206';
const URL='https://api.themoviedb.org/3';

// - originais da netflix
// - recomendados
// - em alta
// - lista de filmes

const Bfetch = async (endpoint) =>{
  const requesit = await fetch(`${URL}${endpoint}`)
  const json = await requesit.json();
  return json;
}

export default{
  getHomeList: async()=>{
    return[
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        itens:  await Bfetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        itens:  await Bfetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        itens:  await Bfetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        itens: await Bfetch(`/discover/movie?with_geners=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        itens: await Bfetch(`/discover/movie?with_geners=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        itens: await Bfetch(`/discover/movie?with_geners=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romances',
        itens: await Bfetch(`/discover/movie?with_geners=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        itens: await Bfetch(`/discover/movie?with_geners=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  }
}