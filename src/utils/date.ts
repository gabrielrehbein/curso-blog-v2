export function formatDatetime(date: string){
  const formatador = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
  });
  return formatador.format(new Date(date));
}
