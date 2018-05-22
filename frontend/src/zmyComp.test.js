// ===[ Importing Dependencies ]================================
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
 
 
 
 
// ===[ Testing <TextComponet/> ]===============================
import TextComp from './Pages/Template'
 
describe('<TextComp />', () => { 
    Enzyme.configure({ adapter: new Adapter() })
    
    it('renders correctly', () => {
      let info = { name: "Milk", type: "Produce", aisle: "14" }
      const Wrapper = Enzyme.shallow(<TextComp data={info} />)
      expect.anything(Wrapper)
    })
})