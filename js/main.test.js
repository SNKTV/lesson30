let assert = chai.assert;
describe("validateEmail", function() {
    describe('valid string', function(){
        it('not an empty string', function() {
            assert.equal(validateEmail(''), false);
        });
        it('typeof string', function() {
            assert.equal(validateEmail(222), false, 'number error');
            assert.equal(validateEmail(true), false, 'boolean error');
            assert.equal(validateEmail({}), false, 'object error');
        });
        it('not an empty string', function() {
            assert.equal(validateEmail('     '), false);
        });
    })
    describe('valid data', function(){
        it('Don\'t have the @ or @ the first character', function(){
            assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
            assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character')
        })

        // Завдання 2
        it('Less than 5 characters', function(){
            assert.equal(validateEmail('qwew'), false, 'Less than 5')
        })

        // Завдання 3
        it('Has more than one @', function(){
            assert.isFalse(validateEmail('email@gmail@.com'), 'More than one @')
        })

        // Завдання 4
        it('Dot comes before @ or dot does not come after @', function(){
            assert.isFalse(validateEmail('email@gmailcom'), 'No dot after @');
            assert.isFalse(validateEmail('email.@gmail.com'), 'Dot just before @')
        })
    })
})