export default function getTitle(pathname: string) {
    switch (pathname) {
      case '/conta/postar':
        return 'Poste Sua Foto';
      case '/conta/estatisticas':
        return 'Estatísticas';
      default:
        return 'Minha Conta';
    }
  }