import React from 'react'
import GraphicAndFlex from './GraphicDesign'
import OffSetAndScreen from './OffSetPrinting'
import Header from '../_component/Header'
import Footer from '../_component/Footer'
import GraphicDesign from './GraphicDesign'
import FlexBanner from './FlexBanner'
import OffSetPrinting from './OffSetPrinting'
import ScreenPrinting from './ScreenPrinting'
import LetterHead from './LetterHead'
import FileAndBag from './FileAndBag'
import Bill from './Bill'
import WeddingCard from './WeddingCard'
import VisitingCard from './VisitingCard'

const Page = () => {
  return (
<>
<Header/>

<GraphicDesign  />
<FlexBanner/>

<OffSetPrinting/>
<ScreenPrinting/>
<WeddingCard/>
<VisitingCard/>
<Bill/>
<LetterHead/>
<FileAndBag/>
  <Footer/>


</> 
 )
}

export default Page