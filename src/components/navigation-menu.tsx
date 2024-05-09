import {
  BellIcon,
  CircleHelp,
  HeartIcon,
  MapIcon,
  Receipt,
  Settings,
  ShoppingBag,
  UserIcon,
  UsersRound,
} from 'lucide-react'

import { NavigationItem } from './navigation-item'
import { Separator } from './ui/separator'

export const NavigationMenu = () => {
  return (
    <nav className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-1">
        <NavigationItem
          href="/profile"
          icon={
            <UserIcon className="h-8 w-8 rounded-full bg-white px-2 py-1 text-primary" />
          }
          label="Informações do perfil"
        />
        <NavigationItem
          href="/addresses"
          icon={
            <MapIcon className="h-8 w-8 rounded-full bg-white px-2 py-1 text-blue-500" />
          }
          label="Endereços"
        />
      </div>

      <Separator className="my-2" />

      <div className="flex flex-col gap-1">
        <NavigationItem
          href="/cart"
          icon={
            <ShoppingBag className="h-8 w-8 rounded-full bg-white px-2 py-1 text-cyan-500" />
          }
          label="Carrinho"
        />
        <NavigationItem
          href="/recipes/favorites"
          icon={
            <HeartIcon className="h-8 w-8 rounded-full bg-white px-2 py-1 text-red-500" />
          }
          label="Favoritos"
        />
        <NavigationItem
          href="/notifications"
          icon={
            <BellIcon className="h-8 w-8 rounded-full bg-white px-2 py-1 text-yellow-500" />
          }
          label="Notificações"
        />
        <NavigationItem
          href="/orders"
          icon={
            <Receipt className="h-8 w-8 rounded-full bg-white px-2 py-1 text-cyan-500" />
          }
          label="Histórico de pedidos"
        />
      </div>

      <Separator className="my-2" />

      <div className="flex flex-col gap-1">
        <NavigationItem
          href="/faqs"
          icon={
            <CircleHelp className="h-8 w-8 rounded-full bg-white px-2 py-1 text-primary" />
          }
          label="FAQs"
        />
        <NavigationItem
          href="/users/reviews"
          icon={
            <UsersRound className="h-8 w-8 rounded-full bg-white px-2 py-1 text-red-500" />
          }
          label="Avaliações dos usuários"
        />
        <NavigationItem
          href="/settings"
          icon={
            <Settings className="h-8 w-8 rounded-full bg-white px-2 py-1 text-yellow-500" />
          }
          label="Configurações"
        />
      </div>
    </nav>
  )
}
