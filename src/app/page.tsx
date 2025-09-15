'use client'

import { Search, User, Bell, Plus, Trophy, Clock, Users, Star, Filter, ChevronRight, Menu, Calendar, Shield, Smartphone, QrCode, Printer, Link, Settings, Target, Zap, LogIn, UserPlus, KeyRound } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center min-h-16 py-4 gap-4">
            {/* Logo - Flex shrink 0 para não comprimir */}
            <div className="flex items-center flex-shrink-0">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/865b3927-8acc-4c0e-a260-802f00f453e9.png" 
                alt="BigRifa Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Navigation - Desktop - Centralizada e flexível */}
            <nav className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">Início</a>
              <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">Como Funciona</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">Sorteios</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">FAQ</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">Contato</a>
            </nav>

            {/* User Actions - Flex shrink 0 para não comprimir */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              {/* Login/Recuperar Senha - Desktop - Compacto */}
              <div className="hidden xl:flex items-center space-x-1">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 font-medium transition-colors px-2 py-2 rounded-lg hover:bg-gray-50 text-sm">
                  <LogIn className="w-4 h-4" />
                  <span className="hidden 2xl:inline">Entrar</span>
                </button>
                <button className="text-gray-500 hover:text-blue-600 font-medium transition-colors px-2 py-2 rounded-lg hover:bg-gray-50 text-xs">
                  <KeyRound className="w-4 h-4 inline mr-1" />
                  <span className="hidden 2xl:inline">Recuperar</span>
                </button>
              </div>
              
              {/* Botão Criar Conta - Responsivo */}
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 sm:px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base">
                <UserPlus className="w-4 h-4" />
                <span className="hidden sm:inline">Criar Conta</span>
                <span className="sm:hidden">Criar</span>
              </button>
              
              {/* Menu Mobile */}
              <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Login Options - Melhor organizado */}
          <div className="xl:hidden pb-4 flex items-center justify-center space-x-4 border-t border-gray-100 pt-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-50 text-sm">
              <LogIn className="w-4 h-4" />
              <span>Entrar</span>
            </button>
            <button className="text-gray-500 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-50 text-sm">
              <KeyRound className="w-4 h-4 inline mr-1" />
              <span>Recuperar Senha</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A plataforma mais flexível do Brasil para sorteios promocionais
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Com uma interface intuitiva, você pode criar um sorteio em poucos minutos para impulsionar a sua marca, atrair clientes ou movimentar seu estoque
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-lg">
              Criar Meu Sorteio
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Ver Como Funciona
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Bigrifa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma oferece total liberdade: você pode definir a data e o horário do sorteio para qualquer momento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Total Liberdade
              </h3>
              <p className="text-gray-600">
                Defina data e horário para qualquer momento, como à 0h no Ano Novo ou às 15h no seu aniversário
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                100% Confiável
              </h3>
              <p className="text-gray-600">
                Garantimos a idoneidade de cada promoção, com recibo de participação na hora
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Interface Intuitiva
              </h3>
              <p className="text-gray-600">
                Crie um sorteio em poucos minutos com nossa plataforma fácil de usar
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Foco em Marketing
              </h3>
              <p className="text-gray-600">
                Impulsione sua marca, atraia clientes e movimente seu estoque com campanhas eficazes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Crie sua Campanha em Passos Simples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma oferece total controle sobre vendas online e externas, ideal até mesmo para uma rede de lojas
            </p>
          </div>

          {/* Passos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Passo 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                1. Personalize sua Promoção
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Adicione a foto do prêmio, sua logomarca, seu nome e telefone para deixar a campanha com a cara do seu negócio.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2. Gerencie as Vendas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Escolha como os bilhetes serão distribuídos e vendidos. Total controle sobre as comissões de vendedores.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                3. Distribua os Bilhetes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Várias opções para chegar até o seu cliente: link direto, QR Code, cupom impresso ou seleção no celular.
              </p>
            </div>
          </div>

          {/* Formas de Distribuição */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Formas de Distribuir os Bilhetes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Link Direto */}
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Link Direto</h4>
                <p className="text-sm text-gray-600">
                  O cliente escolhe os números em uma página personalizada
                </p>
              </div>

              {/* QR Code */}
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">QR Code</h4>
                <p className="text-sm text-gray-600">
                  Cliente escaneia e acessa uma página com todas as suas campanhas
                </p>
              </div>

              {/* Cupom Impresso */}
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Printer className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Cupom Impresso</h4>
                <p className="text-sm text-gray-600">
                  Imprima cupons no seu ponto de venda (PDV) na hora do caixa
                </p>
              </div>

              {/* Seleção no Celular */}
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Seleção no Celular</h4>
                <p className="text-sm text-gray-600">
                  Cliente escolhe o número diretamente na tela do próprio celular
                </p>
              </div>
            </div>
          </div>

          {/* Nova Atualização */}
          <div className="mt-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                A Nova Atualização que Faz a Diferença
              </h3>
              <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                A Bigrifa já era fantástica, mas com a nova atualização, ficou ainda melhor. Agora, a plataforma permite a 
                <strong> emissão impressa de etiquetas ou bilhetes</strong>. Isso é ideal para criar campanhas para produtos específicos e acelerar suas vendas.
              </p>
            </div>
            
            <div className="bg-black/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Exemplo Prático:</h4>
              <p className="leading-relaxed">
                Se você precisa vender um grande estoque de roupas de frio, pode criar uma promoção onde a compra de uma jaqueta 
                dá direito a concorrer a uma viagem. Você imprime os bilhetes na hora para fixar nas jaquetas ou entregar 
                diretamente ao cliente, incentivando a compra de forma estratégica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">1.2M+</div>
              <div className="text-gray-600 font-medium">Usuários Ativos</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Sorteios Criados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">R$ 10M+</div>
              <div className="text-gray-600 font-medium">Em Prêmios</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section - Movido para próximo dos exemplos */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Encontre o Sorteio Perfeito</h2>
            <p className="text-gray-600 mb-6">Busque por categoria, prêmio ou valor do bilhete</p>
            
            {/* Search Bar Destacada */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Buscar sorteios por prêmio, categoria ou valor..."
                  className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white text-lg shadow-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-xl font-medium transition-colors">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">Sorteios em Destaque</h2>
            <div className="flex flex-wrap gap-3">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium shadow-sm">
                Todas
              </button>
              <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-sm border border-gray-200">
                Eletrônicos
              </button>
              <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-sm border border-gray-200">
                Carros
              </button>
              <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-sm border border-gray-200">
                Dinheiro
              </button>
              <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-sm border border-gray-200">
                <Filter className="w-4 h-4 inline mr-2" />
                Filtros
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sorteios Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sorteio Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                <Trophy className="w-16 h-16 text-black" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    iPhone 15 Pro
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">4.9</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  iPhone 15 Pro Max 256GB
                </h3>
                <p className="text-gray-600 mb-4">
                  Concorra ao mais novo iPhone da Apple
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">3 dias restantes</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">1.2k participantes</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progresso</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-yellow-400 h-3 rounded-full transition-all duration-300" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">R$ 5,00</div>
                    <div className="text-sm text-gray-500">por bilhete</div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-sm">
                    Participar
                  </button>
                </div>
              </div>
            </div>

            {/* Sorteio Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                <Trophy className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Carro
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">4.8</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Honda Civic 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Carro zero km, completo
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">7 dias restantes</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">850 participantes</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progresso</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-400 h-3 rounded-full transition-all duration-300" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">R$ 25,00</div>
                    <div className="text-sm text-gray-500">por bilhete</div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-sm">
                    Participar
                  </button>
                </div>
              </div>
            </div>

            {/* Sorteio Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                <Trophy className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Dinheiro
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">5.0</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  R$ 50.000 em Dinheiro
                </h3>
                <p className="text-gray-600 mb-4">
                  Prêmio em dinheiro vivo
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">1 dia restante</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">2.5k participantes</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progresso</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full transition-all duration-300" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">R$ 10,00</div>
                    <div className="text-sm text-gray-500">por bilhete</div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-sm">
                    Participar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-300 shadow-sm">
              Carregar Mais Sorteios
              <ChevronRight className="w-4 h-4 inline ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre como funciona nossa plataforma
            </p>
          </div>

          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Para quem é a Bigrifa?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nosso produto ajuda comerciantes a desenvolver campanhas de sorteio para seus negócios venderem mais. 
                Não é nosso único foco, porém é o principal. A Bigrifa é focada em marketing para impulsionar marcas, 
                atrair clientes e movimentar estoques.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quanto custa?
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Nossa forma de cobrança é muito simples.</p>
                <p>
                  Você paga apenas <strong className="text-blue-600">R$ 0,05</strong> por cada bilhete emitido. 
                  Significa dizer que uma campanha com 100 bilhetes e 50 distribuídos ou vendidos 
                  <strong className="text-blue-600"> VOCÊ paga apenas R$ 2,50</strong> (dois reais e cinquenta centavos).
                </p>
                <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded">
                  <p className="text-yellow-800 font-semibold">
                    Obs: campanhas com até 10 bilhetes são Grátis.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Como funciona?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Basta criar sua conta e clicar em nova campanha. Você será direcionado para uma página 
                onde dará nome à sua campanha e fará as configurações. Não se preocupe, nosso sistema é 
                super intuitivo e a qualquer momento você poderá solicitar nosso suporte.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Posso excluir uma campanha em andamento?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sim você pode, porém se a campanha já estiver ativa (isto é, já tiver sido distribuído bilhetes), 
                ela ficará visível com um aviso <strong className="text-red-600">"cancelada pelo criador da campanha"</strong>.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Como garantem a confiabilidade?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A Bigrifa garante a idoneidade de cada promoção, pois o cliente recebe um recibo de participação 
                na hora, proporcionando mais confiança e segurança para todos os envolvidos.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Qual a novidade da nova atualização?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Agora a plataforma permite a emissão impressa de etiquetas ou bilhetes. Isso é ideal para criar 
                campanhas para produtos específicos e acelerar suas vendas. Você pode imprimir os bilhetes na hora 
                para fixar nos produtos ou entregar diretamente ao cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Pronto para Criar Seu Sorteio?
          </h2>
          <p className="text-xl text-black opacity-90 mb-8 max-w-2xl mx-auto">
            Comece agora e alcance milhares de participantes em poucos minutos
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium text-lg transition-colors shadow-lg">
            Criar Meu Primeiro Sorteio
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
            {/* BigRifa Info */}
            <div className="md:col-span-2">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/865b3927-8acc-4c0e-a260-802f00f453e9.png" 
                alt="BigRifa Logo" 
                className="h-10 w-auto mb-4 object-contain"
              />
              <p className="text-gray-600 mb-4 leading-relaxed max-w-md">
                A plataforma mais flexível do Brasil para a criação e gestão de campanhas de sorteios focadas em marketing. 
                Participe de sorteios incríveis e crie seus próprios sorteios de forma segura e transparente.
              </p>
              <div className="text-gray-600 space-y-2 text-sm">
                <p className="flex items-start">
                  <span className="mr-3 text-blue-600">📍</span>
                  <span>
                    Avenida Paulista, 726<br />
                    Bela Vista - São Paulo/SP
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-blue-600">📞</span>
                  (11) 97540-3512
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-blue-600">✉️</span>
                  sac@bigrifa.com.br
                </p>
              </div>
            </div>
            
            {/* Links Úteis */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Plataforma</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#como-funciona" className="hover:text-blue-600 transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Criar Sorteio</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Participar</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Resultados</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Regulamento</a></li>
              </ul>
            </div>
            
            {/* Suporte */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Suporte</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contato</a></li>
                <li><a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          {/* Divisor com gradiente */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4"></div>
          
          {/* Seção BPFY */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-sm">Um produto da</span>
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/66236f4d-55de-41fd-9d8d-1fda82dc6cd6.jpg" 
                alt="BPFY Logo" 
                className="h-6 w-auto object-contain bg-white p-1 rounded"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                CNPJ: 61.995.447/0001-32 | BPFY LTDA
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              &copy; 2025 BigRifa. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}