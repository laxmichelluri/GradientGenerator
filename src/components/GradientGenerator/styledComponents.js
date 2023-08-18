// Style your elements here

import styled from 'styled-components/macro'

export const GradientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100ch;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1100px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const DirectionDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 430px;
  }
`
export const ColorPickerText = styled.p`
  font-family: 'Roboto';
  color: #ededed;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const CustomInput = styled.input`
  height: 50px;
  width: 100px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 15px;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 5px;
  border: none;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 12px;
  padding-top: 12px;
  margin-left: 0px;
  margin-right: 15px;
  margin-bottom: 10px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`
