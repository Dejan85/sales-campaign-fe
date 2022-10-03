export enum Const {
    heading = 'Specijalna ponuda',
    paragraph = 'Ucestvovanjem u grupnoj kupovini mozete ostvariti neverovatne popuste do cak 45%!',
    numberOfOrders = 'Trenutni broj rezervacija uredjaja',
    discount = 'Trenutni nivo popusta',
    inStock = "Preostali broj uredjaja na stanju",
    note = "Napomena: Ponuda traje do isteka kampanje ili do trajanja zaliha",
    totalNumberOfReservations = "Ukupan broj validinih rezervacija:"
}

export const neededOrders = <T, Y>(orders: T, discount: Y): string => {
    return `Potrebno validnih rezervacija ${orders} do sledeceg nivoa popusta ${discount}%`
}