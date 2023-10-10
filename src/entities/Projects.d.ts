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

type ProjectToPost = {
  nom: string
  description: string
  etape: ETAPE | ""
}
