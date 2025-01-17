"use client"

import { useRouter } from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"
import { useDebounce } from "@/hooks/use-debounce"
import qs from "query-string"
import { Search } from "lucide-react"

import { Input } from "../ui/input"

export const SearchInput = () => {
  const router = useRouter()
  const [value, setValue] = useState("")
  const debouncedValue = useDebounce<string>(value, 500)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    )
    router.push(url)
  }, [debouncedValue, router])
  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        placeholder="Search workspace"
        onChange={handleChange}
        value={value}
        className="w-full max-w-[516px] pl-9"
      />
    </div>
  )
}
