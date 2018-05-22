// ===[ Importing Dependencies ]================================
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'




// ===[ Testing <TextComponet/> ]===============================
import TextComp from './Pages/99-ft'

describe('<TextComp />', () => {
    Enzyme.configure({ adapter: new Adapter() })

    it('renders correctly', () => {
        const Wrapper = Enzyme.shallow(<TextComp />)
        expect.anything(Wrapper)
    })
})







// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Index />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
