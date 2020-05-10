export default {
    async scrape_data({commit}) {
        let response = await this.$axios
            .post('http://localhost:8080/search',
                {
                    postalCode: "119618",
                    searchPhrase: "sushi"
                })
            .then(response => response.data)
            .catch(error => console.log(error))

        commit('init_foodItems', response)
    }
}