const { iteratee } = require('lodash');
const getDocuments = require('../../lib/Gateways/GetDocument')

const mockDocument = [
    {
      date: '2010-02-03T20:30:14.000Z'
    }
  ];

  describe('getDocument', () =>{
    const id = '123'
    const type = 'txt'

it('returns an empty message when connection is not established', async() =>{
   const result = getDocuments(id,type)
    expect(result.toBe() )
})
  }
  )