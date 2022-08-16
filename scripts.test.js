import {
    stringLength, reverseString, Calculator, capitilizeString
} from './scripts.js'

describe('Testing strings', () => {

test('Returns the correct length for a string', () => {
    expect(stringLength("hello")).toBe(5);
    expect(stringLength('')).toEqual('Please insert a character')
    expect(stringLength('1234567899')).toEqual('Please keep the string under 10 characters')
})

test('Returns the string reversed', () => {
expect(reverseString('is')).toBe('si')
})

test('returning a string with the first letter capitilzied',() =>{
    expect(capitilizeString('hello')).toBe('Hello')
})
})

describe('Testing add Functions', () =>
{
    test('1+2 = 3 ', () => {
        expect(Calculator.add(1,2)).toEqual(3)
    })

    test('100 + 377 = 477', () => {
        expect(Calculator.add(100,377)).toEqual(477)
    })

    test('555 + 445 = 1000', () => {
        expect(Calculator.add(555,445)).toEqual(1000)
    })
})

describe('Testing subtraction Functions', () =>
{
    test('11-10 = 1', () => {
        expect(Calculator.subtract(11,10)).toEqual(1)
    })

    test('1000 - 9000 = 100', () => {
        expect(Calculator.subtract(1000,900)).toEqual(100)
    })

    test('500 - 250 = 250', () => {
        expect(Calculator.subtract(500,250)).toEqual(250)
    })
})

describe('Testing subtraction Functions', () =>
{
    test('2 * 2 = 4', () => {
        expect(Calculator.multiply(2,2)).toEqual(4)
    })

    test('10 * 10 = 100', () => {
        expect(Calculator.multiply(10,10)).toEqual(100)
    })

    test('5 * 4 = 20', () => {
        expect(Calculator.multiply(5,4)).toEqual(20)
    })
})

describe('Testing subtraction Functions', () =>
{
    test('10/2 = 5', () => {
        expect(Calculator.divide(10,2)).toEqual(5)
    })
    
    test('33/3 = 11', () => {
        expect(Calculator.divide(33,3)).toEqual(11)
    })

    test('16/4 = 4', () => {
        expect(Calculator.divide(16,4)).toEqual(4)
    })
})


