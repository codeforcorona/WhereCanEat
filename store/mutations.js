export default {
    set_searchText(state, text) {
        state.searchText = text
    },
    set_postalCode(state, code) {
        state.postalCode = code
    },
    set_cuisine(state, newCuisine) {
        state.cuisine = newCuisine 
    },
    set_filter(state, newFilter) {
        state.filter = newFilter
    },
    set_orderType(state, newOrderType) {
        state.orderType = newOrderType
    },
    set_sortBy(state, newSortBy) {
        state.sort = newSortBy
    },
    set_priceRange(state, newRange) {
        state.priceRange[0] = newRange[0]
        state.priceRange[1] = newRange[1]
    }
}