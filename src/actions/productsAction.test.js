import * as actions from './PersonalAction';

describe('actions', () => {
    it('should create LOAD_PROFILE action', () => {
        expect(actions.PersonalAction('Use Redux')).toEqual({
            type: 'LOAD_PROFILE',
            payload: 'Use Redux'
        })
    })
})