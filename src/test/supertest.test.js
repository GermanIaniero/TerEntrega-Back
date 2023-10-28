import chai from "chai";
import { request } from "express";
import supertest from "supertest";
import { faker } from "@faker-js/faker"

const expect = chai.expect

const requester = supertest ('mongodb://localhost:8080')

describe('TEsting Eccomerces', () => {
    describe('Test de Carts', () => {
        it('En endpoint POST /api/carts debera registrar un carrito', async() => {
            const cartMock = {
                pid: '651ad1146448a583a5dd0c7e',
                quantity: '100'
            }
            const response = await requester.post('/api/carts').send(cartMock)
            const { status, ok, _body } = response

            expect(_body.payload).to.have.property('_id')
        })

        it('En endpoint POST /api/carts debera registrar un carrito', async() => {
            const cartMock = {}
            
            const response = await requester.post('/api/carts').send(cartMock)
            const { status, ok, _body } = response

            expect(_body.payload).to.be.eq(false)
        })
    })
})

describe('Registro, Login and Current', () => {
    let cookie;
    const mockUser = { 
        first_name : 'NN',
        last_name :  'NN',
        email : faker.internet.email(),
        age : '23',
        password : '12235'   
    }

    it ('Debe registrar un usuario', async() => {
       const {_body} = await requester.post('/api/users/register').send(mockUser)     
       expect (_body.payload).to.be.ok 
    })
})