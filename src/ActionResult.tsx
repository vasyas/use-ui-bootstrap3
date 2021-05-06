import * as React from "react"
import cx from "classnames"
import {useResult} from "@use-ui/hooks"

/**
 * Display block with success result or error message.
 *
 * To use this component, you need to wrap your component tree in a ```ResultContext``` from @use-ui/hooks.
 *
 * @category Component
 */
export const ActionResult: React.FC<Props> = ({error = undefined}) => {
  const {result} = useResult()

  if (!error && !result) return null

  return (
    <div className={cx("alert", {"alert-danger": !!error, "alert-success": !!result})}>
      {error || result}
    </div>
  )
}

/** @notExported */
interface Props {
  /** Error message to show, otherwise result from result context would be used */
  error: string
}
