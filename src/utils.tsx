import * as React from "react"

export function highlight(s: string, term: string, exact = false): React.ReactFragment {
  if (s && term) {
    s = "" + s

    if (exact) {
      return s == term ? <span className="hlt">s</span> : s
    }

    const parts = s.split(new RegExp(escapeRegex(term), "i"))
    if (parts.length == 1) return parts[0]

    const r = []

    let index = 0

    for (const part of parts) {
      if (r.length > 0) {
        const matched = s.substr(index, term.length)
        r.push(
          <span className="hlt" key={index}>
            {matched}
          </span>
        )

        index += term.length
      }

      r.push(part)
      index += part.length
    }

    return r
  }

  return s
}

function escapeRegex(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}

export function getChildrenText(children) {
  let label = ""

  React.Children.map(children, (child) => {
    if (typeof child == "string") {
      label += child
    }
  })

  return label
}

export function equalExcept<T>(left: T, right: T, ...exclude: Array<keyof T>) {
  const excludeSet = new Set(exclude)
  const leftKeys = Object.keys(left)
  const rightKeys = Object.keys(right)

  if (leftKeys.length != rightKeys.length) return false

  for (const key of leftKeys) {
    if (excludeSet.has(key as keyof T)) continue
    if (left[key] != right[key]) return false
  }

  return true
}
