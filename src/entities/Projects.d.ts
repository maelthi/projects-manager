type APIProject = {
  id: number
  nom: string
  description: string
  commentaire: string
  etape: Etape
}

type Project = {
  id: number
  nom: string
  description: string
  etape: Etape
}

type Etape = "En cours" | "En attente" | "Terminé"
