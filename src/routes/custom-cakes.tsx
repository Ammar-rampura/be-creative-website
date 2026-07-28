import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/custom-cakes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/custom-cakes"!</div>
}
