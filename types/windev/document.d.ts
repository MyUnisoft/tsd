
export interface PJ {
  /** The content (Buffer) of the attachment in base64 format. */
  content: string;

  /**
  Name of the file (the attachment).
  */
  name: string;

  /**
  Mime-type of the attachment. For example: "application/pdf".
  */
  type: "image/gif" |
    "image/jpeg" |
    "image/pjpeg" |
    "image/jpg" |
    "image/bmp" |
    "image/png" |
    "image/x-png" |
    "image/tiff" |
    "image/tif" |
    "application/pdf" |
    "application/vnd.ms-excel" |
    "application/msword" |
    "application/vnd.ms-powerpoint" |
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" |
    "application/vnd.openxmlformats-officedocument.presentationml.presentation" |
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" |
    "application/vnd.oasis.opendocument.text" |
    "text/plain";
}

export interface CloudDocument {
  document_id: number;
  name: string;

  /** Token de partage du document. */
  token: string;

  /** Adresse du serveur. */
  baseUrl: string;

  /** Miniature. */
  thumbnail: string;

  /** URL du document */
  link: string;

  /** URL de téléchargement du document */
  download: string;
}

export interface Attachment extends CloudDocument {
  date_time: string;
  etat: boolean;
}
