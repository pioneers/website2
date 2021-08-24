import React, { useState } from "react"

export const ReadMore = ({ children, maxCharacterCount = 100 }) => {
  const [isTruncated, setIsTruncated] = useState(true)
  const text = children[0].props.children[0]

  const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated)
  }

  return (
    <p>
      {resultString + " "}
      <span onClick={toggleIsTruncated} className="read-more-button">
        {text.length <= maxCharacterCount
          ? ""
          : isTruncated
          ? "Read more..."
          : "Read less"}
      </span>
    </p>
  )
}
