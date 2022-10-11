import personalReducer from "./personalReducer";

describe('personal reducer', () => {

    it('should handle initial state', () => {
        expect(
            personalReducer({}, {})
        ).toEqual({})
    })

    it('should handle LOAD_PROFILE', () => {
        expect(
            personalReducer({},
                {
                    type: "LOAD_PROFILE",
                    payload: 'Run the tests'
                })
        ).toEqual(
            {
                personalData: 'Run the tests'
            }
        )

    })
})