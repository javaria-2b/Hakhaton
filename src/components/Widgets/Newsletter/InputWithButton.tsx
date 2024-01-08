import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton() {
  return (
    <div className="flex flex-col w-full  sm:flex-row  max-w-sm items-center space-y-4 sm:space-y-0 sm:space-x-2 justify-center">
      
      <Input type="email" placeholder="Input email address"  className="flex-1"/>
      <Button type="submit">Get Started</Button>

    
    </div>
  )
}
