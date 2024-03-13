import { MissingParamError } from '../errors/missing-param-error'
import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Deve retornar 400 se o nome não for fornecido', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
  test('Deve retornar 400 se o email não for fornecido', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        // email: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})
