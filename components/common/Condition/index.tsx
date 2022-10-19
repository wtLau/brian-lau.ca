import * as React from 'react'

type ConditionType = {
  condition: boolean
  children: React.ReactNode
  fallback?: React.ReactNode
}

const Condition = ({ condition, children, fallback }: ConditionType) => {
  if (condition) {
    return <>{children}</>
  } else if (fallback) {
    return <>{fallback}</>
  } else {
    return null
  }
}

export default Condition
