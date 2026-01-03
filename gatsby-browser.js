/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"

import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/900.css"
import "@fontsource/noto-serif/400.css"

import "./src/styles/global.css"

import WhatsAppFloat from "./src/components/WhatsAppFloat"

export const wrapPageElement = ({ element }) => (
  <>
    {element}
    <WhatsAppFloat />
  </>
)
