type APIProject = {
  id: number
  nom: string
  description: string
  commentaire: string
  etape: ETAPE
}

type Project = {
  id: number
  nom: string
  description: string
  etape: ETAPE
}

enum ETAPE {
  EN_COURS = "En cours",
  EN_ATTENTE = "En attente",
  TERMINE = "Terminé",
}

type ProjectToPost = {
  nom: string
  description: string
  etape: ETAPE | ""
}
