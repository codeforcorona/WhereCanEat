export default {
    async scrape_data({commit, state}) {
        var pCode = String(state.postalCode)
        if (pCode == "Postal Code") {
            pCode = "119618"
        }
        console.log(pCode)
        var sText = String(state.searchText)
        if (sText == "Search for your favourite food!") {
            sText = ""
        }
        console.log(sText)

        let response = await this.$axios
            .post('http://localhost:8000/search',
                {
                    postalCode: pCode,
                    searchPhrase: sText
                })
            .then(response => response.data)
            .catch(error => console.log(error))

        commit('init_foodItems', response)
    }
}