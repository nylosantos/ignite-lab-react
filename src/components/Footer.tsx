import { LogoFooter } from "./LogoFooter";

export function Footer() {
  return (
    <footer className="border-t border-gray-600 flex justify-between items-center py-6 mx-8">
      <div className="gap-6 flex items-center">
        <a href="#">
          <LogoFooter />
        </a>
        <p className="text-gray-300">Rocketseat - Todos os direitos reservados</p>
      </div>
      <a href="#">
        <p className="text-gray-300">Políticas de privacidade</p>
      </a>
    </footer>
  )
}