"use client"
import styled from "styled-components"
import  React from "react"

const LayoutContainer = styled.div`
  background-color: #121212;
  min-height: 100vh;
  color: #fff;
  font-family: sans-serif;
`

export default function DarkLayout({ children }) {
  return <LayoutContainer>{children}</LayoutContainer>
}
