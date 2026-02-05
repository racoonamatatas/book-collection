<?php

namespace App\Faker\Provider;

use Faker\Provider\Base;

class BookProvider extends \Faker\Provider\Base
{
  public function title($nbWords = 5)
  {
    // removes a '.' from a sentence.
    $sentence = $this->generator->sentence($nbWords);
    return substr($sentence, 0, strlen($sentence) - 1);
  }

  public function ISBN()
  {
    return $this->generator->ean13();
  }
}
