import { createContext, ReactNode, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice?: number;
  description?: string;
  defaultPriceId?: string;
  quantity?: number;
}

interface CartContextType {
  addToCart: (product: IProduct, quantity: number) => void;
  removeProductCart: (productId: string) => void;
  totalPrice: number;
  changeCartItemQuantity: (id: string, quantity: number) => void;
  cartItems: IProduct[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  //Valor total do Carrinho
  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.numberPrice ?? 0;
    const quantity = item.quantity ?? 0;
    return total + price * quantity;
  }, 0);

  //Adicionar Itens ao Carrinho com Quantidade
  function addToCart(product: IProduct, quantity: number) {
    // setCartItems([...cartItems, { ...product, quantity }]);
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const existingItem = updatedCartItems[existingItemIndex];

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + quantity;
      }

      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  }
  //Remover item do Carrinho *Corrigir erro de remover tudo em um clique
  const removeProductCart = (productId: string) => {
    setCartItems((state) =>
      state.filter((product) => product.id !== productId)
    );
  };

  function changeCartItemQuantity(id: string, quantity: number) {
    //Verifica se o ID do Coffee.id é igual ao id fornecido, no click.
    const coffeeIndex = cartItems.findIndex((product) => product.id === id);

    // Se o Coffeindex for igual a -1 o café ainda não está no carrinho não existe nada., adicione-o com a quantidade fornecida
    if (coffeeIndex === -1) {
      // aqui ele retorna no Coffe o id do objeto que for igual ao ID Clicado
      const coffee = cartItems.find((product) => product.id === id);

      //Aqui se o Coffe for positivo, ele passa no SetCartItems um spread com todo resto de CartItems + todo resto que tem em coffe, e adiciona q quantitdade 1 como padrão
      if (coffee) {
        setCartItems([...cartItems, { ...coffee, quantity: 1 }]);
      }
    }
    //Se o coffeIndex nao for igual a -1 é porque ja existe um item no carrinho
    else {
      //Aqui ele pega o UpdateCart e passa um spread criando uma copia do CartITems
      const updatedCart = [...cartItems];
      //entao nessa linha o UpdateCart recebe o mesmo updateCart, só que com o ??  passando o 0 como valor padrao, e o  + Quantiymodifier que altera o valor
      updatedCart[coffeeIndex].quantity =
        (updatedCart[coffeeIndex].quantity ?? 0) + quantity;
      //E aqui ele atualiza o CartITems com o novo valor que é o UpdateCart, que no caso é uma copia do CartItems com alterações
      setCartItems(updatedCart);
    }
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        removeProductCart,
        totalPrice,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
