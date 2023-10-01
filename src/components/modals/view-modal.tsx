"use client";

import { Modal } from "@/components/ui/modal";
import { UseAppDispatch, UseAppSelector } from "@/hooks/use-app-selector";
import { onClose } from "@/redux/states/view-modal.slice";

export const ViewModal = () => {
  const dispatch = UseAppDispatch();
  const { isOpen } = UseAppSelector((state) => state.viewModal);

  const data = {
    id: "ASlk23#ZX",
    nome: "Antonio da Silva",
    cpf: "123.456.789-09",
    genero: "Masculino",
    dataNascimento: new Date(2000, 4, 29),
    cep: "90040-000",
    logradouro: "Avenida João Pessoa",
    cidade: "Porto Alegre",
    bairro: "Centro Histórico",
    uf: "RS",
    email: "antoniodasilva@gmail.com",
    telefone: "(55) 99989-9889",
    medico: "Marcus Filho",
    title: "Consulta com o dr. Marcus Filho",
    start: "02/10/2023, 10:00",
    end: "02/10/2023, 12:00",
    metodoPagamento: "dinheiro",
    valor: "120",
  };

  return (
    <Modal
      title="Detalhes do Agendamento"
      isOpen={isOpen}
      onClose={() => dispatch(onClose())}
    >
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <span className="font-bold">ID:</span>{" "}
              <span className="text-red-500">{data.id}</span>
            </p>
            <p>
              <span className="font-bold">Nome:</span> {data.nome}
            </p>
            <p>
              <span className="font-bold">CPF:</span> {data.cpf}
            </p>
            <p>
              <span className="font-bold">Gênero:</span> {data.genero}
            </p>
            <p>
              <span className="font-bold">Data de Nascimento:</span>{" "}
              {new Date(data.dataNascimento).toLocaleDateString()}
            </p>
            <p>
              <span className="font-bold">CEP:</span> {data.cep}
            </p>
            <p>
              <span className="font-bold">Logradouro:</span> {data.logradouro}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Cidade:</span> {data.cidade}
            </p>
            <p>
              <span className="font-bold">Bairro:</span> {data.bairro}
            </p>
            <p>
              <span className="font-bold">UF:</span> {data.uf}
            </p>
            <p>
              <span className="font-bold">Email:</span> {data.email}
            </p>
            <p>
              <span className="font-bold">Telefone:</span> {data.telefone}
            </p>
            <p>
              <span className="font-bold">Médico:</span> {data.medico}
            </p>
            <p>
              <span className="font-bold">Título:</span> {data.title}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Início:</span> {data.start}
            </p>
            <p>
              <span className="font-bold">Término:</span> {data.end}
            </p>
            <p>
              <span className="font-bold">Método de Pagamento:</span>{" "}
              {data.metodoPagamento}
            </p>
          </div>
        </div>
        <div
          className="mt-4 flex h-20 w-full items-center justify-center 
          gap-x-2 rounded-xl bg-gray-200 text-xl"
        >
          <span className="font-bold">Valor:</span>
          <span className="text-green-500">R$ {data.valor}</span>
        </div>
      </div>
    </Modal>
  );
};
