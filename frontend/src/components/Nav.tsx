import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FiGithub } from "react-icons/fi";

export const Nav = () => {
	return (
		<nav className="flex p-6 items-center justify-between max-w-4xl mx-auto">
			<div>
				<h1>Product Store!</h1>
			</div>
			<div className="flex gap-4 items-center">
				<Dialog>
				  <DialogTrigger className="cursor-pointer text-sm text-white bg-black py-2 px-4">Create a Product</DialogTrigger>
				  <DialogContent>
				    <DialogHeader>
				      <DialogDescription>
				      	<p>Create a new Product!</p>
				      </DialogDescription>
				    </DialogHeader>
				  </DialogContent>
				</Dialog>

				<a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black" >
					<FiGithub size="20" />
				</a>
			</div>
		</nav>
	)
}